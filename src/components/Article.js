const Article = ({ title, minutes, preview, date = "January 1, 1970" }) => {
    const addEmojis = (time) => {
        let result = "";
        let coffee = "☕️";
        let box = "🍱";
        let limit = 0;
        let emoji = "";
        if (time < 30) {
            limit = Math.ceil(time/5);
            emoji = coffee;
        } else {
            limit = Math.floor(time/10) + 1;
            emoji = box;
        }
        for (let i = 0; i < limit; i++) {
            result += emoji;
        }
        return result;
    }
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} - {addEmojis(minutes)} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;