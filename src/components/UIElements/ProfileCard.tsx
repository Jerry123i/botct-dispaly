import {type ChangeEvent, useRef, useState} from "react";
import {GavelIcon, GhostIcon, KnifeIcon} from "@phosphor-icons/react";

interface ProfileCardProps {
    index: number;
    isOnBlock: boolean;
    onPutOnBlock: (player: {
        index: number;
        name: string;
        imageUrl: string;
        isDead: boolean;
    }) => void;
    onDeadStatusChange: (index: number, isDead: boolean) => void;
}

export function ProfileCard({index, onPutOnBlock, isOnBlock, onDeadStatusChange, }: ProfileCardProps) {
    const [name, setName] = useState(`Player ${index + 1}`);
    const [isEditing, setIsEditing] = useState(false);
    const [tempName, setTempName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isDead, setIsDead] = useState(false);
    const [ghostVote, setGhostVote] = useState(true);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleNameClick = () => {
        setTempName(name);
        setIsEditing(true);
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTempName(e.target.value);
    };

    const handleNameBlur = () => {
        if (tempName.trim()) {
            setName(tempName.trim());
        }
        setIsEditing(false);
    };

    const handleNameKeyDown = (e : React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleNameBlur();
        } else if (e.key === 'Escape') {
            setIsEditing(false);
        }
    };

    // const handleImageClick = () => {
    //     fileInputRef.current?.click();
    // };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () =>
            {
                if (typeof reader.result === "string")
                    setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const toggleDead = () => {
        const newDeadState = !isDead;
        setIsDead(newDeadState);
        if (newDeadState) {
            setGhostVote(true);
        }
        onDeadStatusChange(index, newDeadState);
    };

    const toggleGhost = () => {
        setGhostVote(!ghostVote);
    };

    return (
        <div className={`flex items-center gap-4 p-4 transition-colors min-h-28 ${
                isDead
                    ? 'bg-neutral-500'
                    : 'bg-ct-paper-light '
        }`}>
            {/*<div*/}
            {/*    onClick={handleImageClick}*/}
            {/*    className="w-20 h-20 rounded-full bg-gradient-to-br from-ct-blue-medium to-ct-blue-dark flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-md overflow-hidden flex-shrink-0 relative"*/}
            {/*>*/}
            {/*    {imageUrl ? (*/}
            {/*        <img*/}
            {/*            src={imageUrl}*/}
            {/*            alt="Profile"*/}
            {/*            className="w-full h-full object-cover"*/}
            {/*        />*/}
            {/*    ) : (*/}
            {/*        <UserIcon className="w-10 h-10 text-white" />*/}
            {/*    )}*/}
            {/*    {isDead && (*/}
            {/*        <div className="absolute inset-0 bg-black opacity-50 rounded-full"></div>*/}
            {/*    )}*/}
            {/*</div>*/}

            <div className="flex-1">
                {isEditing ? (
                    <input
                        type="text"
                        value={tempName}
                        onChange={handleNameChange}
                        onBlur={handleNameBlur}
                        onKeyDown={handleNameKeyDown}
                        autoFocus
                        className="w-full text-xl font-semibold text-gray-800 bg-white border-2 border-indigo-500 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                ) : (
                    <div>
                        <div className="flex items-center gap-0">
                            <div
                                onClick={handleNameClick}
                                className={`text-[28px] font-semibold cursor-pointer py-0.5 pr-2
                                ${isOnBlock?'text-ct-red-medium':
                                    isDead ? ghostVote? 'text-gray-50' :'text-neutral-700 hover:text-gray-100' : 'text-neutral-800 '
                                }`}
                            >
                                {name}
                            </div>
                            <button
                                onClick={toggleDead}
                                className={`p-1.5 rounded-lg hover:bg-gray-500 transition-colors`}
                                title={isDead ? "Resurrect" : "Kill"}
                            >
                                <KnifeIcon
                                    className={`w-6 h-6 text-gray-400 transition-all`}
                                />
                            </button>
                            {!isDead && (
                                <button
                                    onClick={() => onPutOnBlock({ index, name, imageUrl, isDead })}
                                    disabled={isOnBlock}
                                    className={`p-1.5 rounded-lg transition-colors ${
                                        isOnBlock
                                            ? 'bg-ct-red-medium cursor-not-allowed'
                                            : 'hover:hover:bg-gray-500'
                                    }`}
                                    title="Put on the block"
                                >
                                    <GavelIcon
                                        className={`w-6 h-6 ${isOnBlock ? 'fill-yellow-600 text-yellow-600' : 'text-gray-400'} transition-all`}
                                    />
                                </button>
                            )}
                        </div>
                        {isDead && (
                            <button
                                onClick={toggleGhost}
                                className="flex items-center gap-1 mt-1 text-gray-50 hover:text-gray-100 transition-colors"
                            >
                                {ghostVote?
                                    <GhostIcon className={`w-6 h-6`} weight={"fill"} />:
                                    <GhostIcon className={`w-6 h-6 opacity-40`} />}
                                <span className="text-lg font-semibold ">
                                    {ghostVote ? 'Voto Fantasma' : ''}
                                </span>
                            </button>
                        )}
                    </div>
                )}
            </div>

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
            />
        </div>
    );
}