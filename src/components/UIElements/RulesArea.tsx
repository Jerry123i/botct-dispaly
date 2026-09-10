import roles from "../../assets/roles.json";
type Alignment = 'citizen' | 'outsider' | 'minion' | 'demon';

interface Role {
    name: string;
    description: string;
    icon: string;
}

interface Script{
    citizen: Role[],
    outsider: Role[],
    minion: Role[],
    demon: Role[]
}

interface RoleCardProps extends Role {
    alignment: Alignment;
}

interface RoleSectionProps {
    title: string;
    alignment: Alignment;
    roles: Role[];
}

// ---------------------------------------------------------------------------
// Alignment -> Tailwind class lookups (keeps color choices in one place)
// ---------------------------------------------------------------------------

const ALIGNMENT_TEXT_COLOR: Record<Alignment, string> = {
    citizen: 'text-ct-blue-light',
    outsider: 'text-gray-600',
    minion: 'text-ct-red-dark',
    demon: 'text-red-900',
};

const ALIGNMENT_HEADER_COLOR: Record<Alignment, string> = {
    citizen: 'text-ct-blue-medium border-ct-blue-medium',
    outsider: 'text-gray-600 border-gray-600',
    minion: 'text-ct-red-dark border-ct-red-dark',
    demon: 'text-red-900 border-red-900',
}

const loadedRoles = roles as Script;

// ---------------------------------------------------------------------------
// Presentational components
// ---------------------------------------------------------------------------

function RoleCard({ name, description, icon, alignment }: RoleCardProps) {
    return (
        <div className="flex items-start gap-2 not-odd:bg-linear-to-r  not-odd:from-[#c8bbaf] to-color-ct-paper-light">
            <img src={icon} alt={name} className="role-image" />
            <div>
                <h3 className={`mt-1.5 font-bold ${ALIGNMENT_TEXT_COLOR[alignment]}`}>{name}</h3>
                <p className="-mt-1 role-text text-lg">{description}</p>
            </div>
        </div>
    );
}

function RoleSection({ title, alignment, roles }: RoleSectionProps) {
    return (
        <div>
            <div className={`flex items-center gap-3 mb-2 border-b-2 pb-2 ${ALIGNMENT_HEADER_COLOR[alignment]}`}>
                <h2 className="text-2xl font-bold">{title}</h2>
            </div>
            <div className="space-y-0.5">
                {roles.map((role) => (
                    <RoleCard key={role.name} alignment={alignment} {...role} />
                ))}
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// RulesArea
// ---------------------------------------------------------------------------

export function RulesArea(showRules: boolean, showRulesSetter: (a: boolean) => void) {
    return (
        <div
            className={`fixed inset-0 bg-gradient-to-tr from-stone-900 to-black transition-transform duration-500 ease-in-out ${
                showRules ? 'translate-x-0' : 'translate-x-full'
            } overflow-auto p-8`}
        >
            <div className="max-w-8xl mx-auto relative">
                <button
                    onClick={() => showRulesSetter(false)}
                    className="fixed left-4 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-colors z-10"
                    title="Back to player tracker"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="bg-gradient-to-bl from-stone-300 to-ct-paper-medium rounded-2xl shadow-lg px-8 py-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        <RoleSection title="CIDADÃOS" alignment="citizen" roles={loadedRoles.citizen} />

                        <div className="space-y-1.5">
                            <RoleSection title="FORASTEIROS" alignment="outsider" roles={loadedRoles.outsider} />
                            <RoleSection title="CAPANGAS" alignment="minion" roles={loadedRoles.minion} />
                            <RoleSection title="DEMÔNIOS" alignment="demon" roles={loadedRoles.demon} />
                        </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-gray-300 text-center text-sm text-gray-500">
                        <p>© Steven Medway, bloodontheclocktower.com</p>
                        <p className="mt-1">* Not the first night</p>
                    </div>
                </div>
            </div>
        </div>
    );
}