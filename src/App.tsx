import {useState} from "react";

import {ProfileCard} from "./components/UIElements/ProfileCard.tsx";
import {RulesArea} from "./components/UIElements/RulesArea.tsx";

import botctLogo from "./assets/logo_black.png"
import {GavelIcon, UserIcon, XIcon} from "@phosphor-icons/react";

type Player = {
  index: number;
  name: string;
  imageUrl: string;
  isDead: boolean;
};

export default function App() {
  const [started, setStarted] = useState(false);
  const [numPlayers, setNumPlayers] = useState('');
  const [players, setPlayers] = useState<Player[]>([]);
  const [playerOnBlock, setPlayerOnBlock] = useState<Player | null>(null);
  const [votesToTie, setVotesToTie] = useState('');
  const [showRules, setShowRules] = useState(false);
  const [isNight, setIsNight] = useState(false);

  const handleStart = () => {
    const count = parseInt(numPlayers);
    if (count > 0 && count <= 20) {
      setPlayers(
          Array.from({ length: count }, (_, i): Player => ({
            index: i,
            name: `Player ${i + 1}`,
            imageUrl: '',
            isDead: false,
          }))
      );
      setStarted(true);
    }
  };

  const handleKeyDown = (e : React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleStart();
    }
  };

  const handlePutOnBlock = (player: Player) => {
    setPlayerOnBlock(player);
    setVotesToTie('');
  };

  const handleRemoveFromBlock = () => {
    setPlayerOnBlock(null);
    setVotesToTie('');
  };

  const handleDeadStatusChange = (playerIndex: number, isDead: boolean) => {
    setPlayers(prevPlayers =>
        prevPlayers.map(p =>
            p.index === playerIndex ? { ...p, isDead } : p
        )
    );
  };

  const handleWakeUp = () => {
    const audio = new Audio('https://www.soundjay.com/misc/sounds/rooster-1.mp3');
    audio.play().catch(err => console.log('Audio play failed:', err));
    setIsNight(false);
  };

  const alivePlayers = players.filter(p => !p.isDead).length;
  const minVotesToExecute = Math.ceil(alivePlayers / 2);
  const votesToExecute = votesToTie ? parseInt(votesToTie) + 1 : 0;

  if (!started) {
    return (
        <div className="min-h-screen bg-linear-to-tr from-stone-900 to-black flex items-center justify-center p-4">
          <div className="bg-ct-paper-medium rounded-2xl shadow-lg p-12 max-w-md w-full">
            <div className="flex justify-center mb-6">
              <img src={botctLogo} alt={""}></img>
            </div>
            <h2 className="text-neutral-800 mb-8 text-center">Quantos jogadores?</h2>

            <div className="space-y-4">
              <input
                  type="number"
                  min="1"
                  max="20"
                  value={numPlayers}
                  onChange={(e) => setNumPlayers(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Número de jogadores    "
                  className="w-full text-lg px-4 py-3 border-2 border-stone-600 rounded-lg focus:outline-none focus:border-ct-blue-dark focus:ring-2 focus:ring-indigo-200 transition-all"
                  autoFocus
              />
              <button
                  onClick={handleStart}
                  disabled={!numPlayers || parseInt(numPlayers) <= 0 || parseInt(numPlayers) > 20}
                  className="w-full bg-ct-blue-dark text-white font-semibold py-3 px-6 rounded-lg hover:bg-ct-blue-medium disabled:bg-neutral-600 disabled:cursor-not-allowed transition-colors"
              >
                Começar
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-6 text-center">
              Máximo 20 Jogadores
            </p>
          </div>
        </div>
    );
  }

  return (
      <div className="min-h-screen bg-gradient-to-tr from-stone-900 to-black overflow-hidden relative">
        <div className={`transition-transform duration-500 ease-in-out p-8 ${showRules ? '-translate-x-full' : 'translate-x-0'}`}>
          <div className="max-w-8xl mx-auto relative">
            <button
                onClick={() => setShowRules(true)}
                className="fixed right-4 bottom-4 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-colors z-10"
                title="View game rules"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="flex gap-6">
              <div className="w-80 flex-shrink-0 space-y-4">
                <div className="bg-ct-paper-dark rounded-md shadow-md p-6">
                  <h2 className="text-sm font-semibold text-gray-600 mb-2 text-center">Votos para executar</h2>
                  <div className="text-6xl font-bold text-red-950 text-center">
                    {minVotesToExecute}
                  </div>
                  <p className="text-s text-neutral-800-800 text-center mt-2">
                    {alivePlayers} jogadores vivos
                  </p>
                </div>

                <div className="bg-ct-paper-dark rounded-md shadow-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-stone-900">Jogador na forca</h2>
                    {playerOnBlock && (
                        <button
                            onClick={handleRemoveFromBlock}
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                            title="Remove from block"
                        >
                          <XIcon className="w-5 h-5 text-gray-500" />
                        </button>
                    )}
                  </div>

                  {playerOnBlock ? (
                      <div>
                        <div className="flex items-center gap-3 mb-4 p-3 bg-ct-red-light rounded-lg ">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                            {playerOnBlock.imageUrl ? (
                                <img
                                    src={playerOnBlock.imageUrl}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <UserIcon className="w-6 h-6 text-white" />
                            )}
                          </div>
                          <div className="font-semibold text-neutral-200">{playerOnBlock.name}</div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <label className="text-md font-medium text-stone-900 block mb-1">Votos para empatar</label>
                            <input
                                type="number"
                                min="0"
                                value={votesToTie}
                                onChange={(e) => setVotesToTie(e.target.value)}
                                placeholder="Enter votes"
                                className="w-full text-lg px-3 py-2 border-2 bg-ct-paper-light border-neutral-500 rounded-lg focus:outline-none font-semibold"
                            />
                          </div>
                          <div>
                            <label className="text-md font-medium text-stone-900 block mb-1">Votos para executar</label>
                            <div className="px-3 py-2 text-md bg-ct-paper-light border-2 border-neutral-500 rounded-lg text-lg font-semibold text-gray-800">
                              {votesToExecute || '-'}
                            </div>
                          </div>
                        </div>
                      </div>
                  ) : (
                      <div className="text-center py-8 text-gray-400">
                        <GavelIcon className="w-12 h-12 mx-auto mb-2 opacity-50 text-red-950" />
                        <p className="text-sm text-neutral-600">Nenhum jogador na forca</p>
                      </div>
                  )}
                </div>

                {/*<button*/}
                {/*    onClick={() => setIsNight(true)}*/}
                {/*    className="w-full bg-ct-blue-medium hover:bg-ct-blue-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"*/}
                {/*>*/}
                {/*    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">*/}
                {/*        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />*/}
                {/*    </svg>*/}
                {/*    Go to Night*/}
                {/*</button>*/}
              </div>

              <div className="flex-1">
                <div className="grid grid-cols-2 gap-3">
                  {players.map((player) => (
                      <div key={player.index} className="bg-neutral-500 shadow-md p-0.5">
                        <ProfileCard
                            index={player.index}
                            onPutOnBlock={handlePutOnBlock}
                            isOnBlock={playerOnBlock?.index === player.index}
                            onDeadStatusChange={handleDeadStatusChange}
                        />
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {isNight && (
            <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
              <button
                  onClick={handleWakeUp}
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-2xl py-6 px-12 rounded-full shadow-2xl transition-all transform hover:scale-105 flex items-center gap-3"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
                Wake Up
              </button>
            </div>
        )}

        {RulesArea(showRules, setShowRules)}

      </div>
  );
}