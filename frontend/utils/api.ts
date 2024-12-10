export async function generateCard(name: string, stacks: Array<{ name: string; icon: string }>) {
    const response = await fetch("http://localhost:8000/api/generate-card/", {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({ name, stacks }),
    });
    return response.json();
}