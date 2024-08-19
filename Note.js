function Note() {
    const [notes, setNotes] = React.useState([]);
    const [noteField, setNoteField] = React.useState("");
    const [showNotes, setShowNotes] = React.useState(false);

    const handleInputChange = (e) => {
        setNoteField(e.target.value);
    };

    const handleAddNotes = () => {
        const gDate = new Date();
        let abb = "AM";
        let hour = gDate.getHours();

        if (hour > 12) {
            hour -= 12;
            abb = "PM";
        } else if (hour === 0) {
            hour = 12;
            abb = "AM";
        } else if (hour === 12) {
            abb = "PM";
        }

        const date = `${gDate.getMonth() + 1}/${gDate.getDate()}/${gDate.getFullYear()}`;
        const time = `${hour}:${gDate.getMinutes().toString().padStart(2, "0")}:${gDate.getSeconds().toString().padStart(2, "0")} ${abb}`;
        const timeDate = `${date}, ${time}`;
        
        const newNote = `${noteField}\n${timeDate}`;

        setNotes([...notes, newNote]);
        setShowNotes(false);
        alert("new notes added!");
    };

    const handleShowAll = () => {
        setShowNotes(true);
    };

    const handleClearNotes = () => {
        setNotes([]);
        setShowNotes(false); 
    };

    return (
        <div>
            <h1>Stick Notes</h1>
            <input type="text" onChange={handleInputChange} value={noteField} />
            <button onClick={handleAddNotes}>Add note</button>
            <button onClick={handleClearNotes}>Clear notes</button>
            <button onClick={handleShowAll}>Show All notes</button>
            <div>
                {showNotes && notes.map((n, i) => (
                    <div key={i}>
                        {n.split('\n').map((line, j) => (
                            <p key={j}>
                                {line}
                                <br />
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

ReactDOM.render(<Note />, document.getElementById("root"));
