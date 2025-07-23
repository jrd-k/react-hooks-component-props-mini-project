function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const emoji = minutes < 30 
    ? "☕️".repeat(Math.ceil(minutes / 5)) 
    : "🍱".repeat(Math.ceil(minutes / 10));
    
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{emoji} {minutes} min read</p>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
