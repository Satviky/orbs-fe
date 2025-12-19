const SkillCard = ({ title, score, color }) => {
    // Calculates the dash offset for the SVG circle based on the score (0-100)
    const circumference = 2 * Math.PI * 40; // 40 is the radius (r)
    const offset = circumference - (score / 100) * circumference;

    const ringColor = `text-${color}-500`;
    const bgColor = `text-gray-700`;

    return (
        <div className="flex flex-col items-center p-3 w-32">
            <div className={`text-sm font-semibold mb-2 text-${color}-400 text-center truncate`}>{title}</div>
            <div className="relative w-24 h-24">
                <svg className="w-full h-full transform -rotate-90">
                    {/* Background track */}
                    <circle
                        className={bgColor}
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="48"
                        cy="48"
                    />
                    {/* Progress arc */}
                    <circle
                        className={`${ringColor} transition-all duration-1000`}
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="48"
                        cy="48"
                    />
                </svg>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white">
                    {score}%
                </span>
            </div>
        </div>
    );
};

export default SkillCard;