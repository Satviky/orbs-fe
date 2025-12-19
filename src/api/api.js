const API = import.meta.env.VITE_API_URL;

// GET request
export const apiGet = async (path) => {
    const res = await fetch(`${API}${path}`);
    return res.json();
};

// POST request
export const apiPost = async (path, body) => {
    const res = await fetch(`${API}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    return res.json();
};
