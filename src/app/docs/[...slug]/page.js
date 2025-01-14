async function Docs({ params }) {
    const { slug } = await params;
    return (
        <h3>Docs Homepage {slug}</h3>
    )
}
export default Docs;