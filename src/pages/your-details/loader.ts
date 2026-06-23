export const detailsLoader = async () => {
    const res = await fetch ("http://localhost:3000/users/jackId")

    return res.json()
}