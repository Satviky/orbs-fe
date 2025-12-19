const ThemeToggle = () => {
    // const toggleTheme = () => {
    //     document.documentElement.classList.toggle("dark");
    // };
    const toggleTheme = () => {
        const root = document.documentElement;

        if (root.classList.contains("dark")) {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className=" w-10 h-10 rounded-full bg-[var(--bulb)] transition-all duration-500 cursor-pointer "
            style={{
                boxShadow: "var(--bulb-glow)",
            }}
            aria-label="Toggle theme"
        />
    );
};

export default ThemeToggle;
