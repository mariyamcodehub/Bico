import React from 'react'



function StatCard({ figureIcon, title, value, valueColor, avatarSrc, avatarAlt }) {
    return (
        <div className="stat min-w-24">
            <div className={`stat-figure ${valueColor}`}>
                {figureIcon ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={figureIcon}></path>
                    </svg>
                ) : (
                    <div className="avatar online">
                        <div className="lg:w-10 w-0 rounded-full">
                            <img src={avatarSrc} alt={avatarAlt} />
                        </div>
                    </div>
                )}
            </div>
            <div className={`stat-value ${valueColor} lg:text-xl text-xs`}>{value}</div>
            <div className="stat-title text-xs">{title}</div>
        </div>
    );
}

function StatsContainer() {
    return (
        <>
            <div className="stats shadow flex lg:flex-row overflow-hidden">
                <StatCard
                    figureIcon="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    title="Total Likes"
                    value="25.6K"
                    valueColor="text-primary"
                />
                <StatCard
                    figureIcon="M13 10V3L4 14h7v7l9-11h-7z"
                    title="Post Views"
                    value="2.6M"
                    valueColor="text-secondary"
                />
                <StatCard
                    avatarSrc="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    avatarAlt="Avatar"
                    title="Tasks done"
                    value="86%"
                    valueColor=""
                />
            </div>
            <div className="stats shadow flex lg:flex-row overflow-hidden">
                <StatCard
                    figureIcon="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    title="Total Likes"
                    value="15.6K"
                    valueColor="text-primary"
                />
                <StatCard
                    figureIcon="M13 10V3L4 14h7v7l9-11h-7z"
                    title="Post Views"
                    value="1.29M"
                    valueColor="text-secondary"
                />
                <StatCard
                    avatarSrc="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    avatarAlt="Avatar"
                    title="Tasks done"
                    value="75%"
                    valueColor=""
                />
            </div>
            <div className="stats shadow flex lg:flex-row overflow-hidden">
                <StatCard
                    figureIcon="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    title="Total Likes"
                    value="8.6K"
                    valueColor="text-primary"
                />
                <StatCard
                    figureIcon="M13 10V3L4 14h7v7l9-11h-7z"
                    title="Post Views"
                    value="2.6k"
                    valueColor="text-secondary"
                />
                <StatCard
                    avatarSrc="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    avatarAlt="Avatar"
                    title="Tasks done"
                    value="56%"
                    valueColor=""
                />
            </div>
            <div className="stats shadow flex lg:flex-row overflow-hidden">
                <StatCard
                    figureIcon="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    title="Total Likes"
                    value="5.6K"
                    valueColor="text-primary"
                />
                <StatCard
                    figureIcon="M13 10V3L4 14h7v7l9-11h-7z"
                    title="Post Views"
                    value="1.2k"
                    valueColor="text-secondary"
                />
                <StatCard
                    avatarSrc="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    avatarAlt="Avatar"
                    title="Tasks done"
                    value="26%"
                    valueColor=""
                />
            </div>
        </>
    );
}

export default StatsContainer;


