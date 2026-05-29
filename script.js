let posts = [];

function createPost(){

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  posts.push({
    title,
    content,
    comments:[]
  });

  displayPosts();
}

function addComment(index){

  const commentInput = document.getElementById(`comment-${index}`);

  posts[index].comments.push(commentInput.value);

  displayPosts();
}

function displayPosts(){

  const postsDiv = document.getElementById("posts");

  postsDiv.innerHTML = "";

  posts.forEach((post,index)=>{

    postsDiv.innerHTML += `
      <div class="post">
        <h2>${post.title}</h2>
        <p>${post.content}</p>

        <input type="text" id="comment-${index}" placeholder="Add comment">

        <button onclick="addComment(${index})">
          Comment
        </button>

          ${post.comments.map(c=>`<p>💬 ${c}</p>`).join("")}
      </div>
    `;
  });
}
