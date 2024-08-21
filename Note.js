function Note() {
    const [notes, setNotes] = React.useState([]);
    const [showNotes, setShowNotes] = React.useState(false);
    let noteField = "";
    
    const handleInputChange = (inputField) => {
        noteField = inputField.target.value;
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
        const time = `${hour}:${gDate.getMinutes()}:${gDate.getSeconds()} ${abb}`;
        console.log(time);
        
        const timeDate = `${date}, ${time}`;
        const newNote = `${noteField}-${timeDate}`;

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
        alert('all notes has been cleared!')
    };

    return (
        <div>
            <h1>Stick Notes</h1>
            <input type="text" onChange={handleInputChange} />
            <button onClick={handleAddNotes}>Add note</button>
            <button onClick={handleClearNotes}>Clear notes</button>
            <button onClick={handleShowAll}>Show All notes</button>
            <div>
                {showNotes && notes.map((myNotes) => (
                    <div>
                        {myNotes.split('-').map((NextLine) => (
                            <p>   
                                {NextLine}
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
