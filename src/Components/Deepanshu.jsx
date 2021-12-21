const DeepanshuComponent = () => {
    //a list of random white names
    const whiteNames = [
        "Aaliyah",
        "Aaron",
        "Abagail",
        "Abbey",
        "Abbie",
        "Abbigail",
        "Abby",
        "Abdiel",
        "Abdul",
    ];
    return (
        <div>
            <ul>
            {
                whiteNames.map(name => <li>{name}</li>)
            }
            </ul>
        </div>
    );
}
export default DeepanshuComponent;
