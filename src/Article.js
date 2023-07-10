import React from 'react';
import './style.css';

function Article() {
  return (
    <main className="Article">
      <article>
        <h3>11/12/13</h3>
        <h2><a href="#">On the Street in Brooklyn</a></h2>
        <img src={require('./blog-image-1.jpg')} alt="Fashion stuff" />
        <p>Csfjin culpa stumptown, Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nulla tempore totam quod illum, inventore repellat quo veniam sit! Ad ducimus laborum doloribus libero veniam at reprehenderit, velit quis id? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis esse enim vero dolore ex, repellendus, rerum saepe nostrum eligendi dolorum doloribus, a accusamus. Dicta blanditiis maiores necessitatibus veniam architecto! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laborum amet odio eligendi dolorum? Doloremque id odio neque assumenda culpa sequi tempora maiores ducimus corrupti obcaecati, repudiandae reprehenderit laborum quo..</p>
        <p className="more"><a href="#">Continues...</a></p>
      </article>
      <article>
        <h3>11/11/13</h3>
        <h2><a href="#">Vintage in Vogue</a></h2>
        <img src={require('./blog-image-2.jpg')} alt="Fashion stuff" />
        <p>Sevlin Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus laborum hic assumenda aperiam mollitia fugit delectus facere deserunt necessitatibus, molestias, explicabo, facilis nesciunt repudiandae sit? Impedit quidem voluptates iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quod id aliquid quisquam error debitis sunt? Provident accusantium, beatae aliquid quas eveniet odit adipisci. Culpa in at delectus minima reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, esse! Reiciendis non aspernatur velit voluptatum itaque dolore, eius voluptates? Quisquam iusto odit nobis distinctio! At possimus animi quo reprehenderit quod..</p>
        <p className="more"><a href="#">Continues...</a></p>
      </article>
    </main>
  );
}

export default Article;
