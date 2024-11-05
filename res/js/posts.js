window.onload = function() {

    /* Fetch data from a server. The JSON file was stored on this website: https://jsonbin.io/app/bins
    fetch('https://api.jsonbin.io/v3/b/6721ec86ad19ca34f8c0e84f')
        .then((response) => response.json())
        .then(json => {
            console.log(json);

            // Get the 'record' array where post data is stored
            const posts = json.record;

            // Get the middle div where posts will be appended
            const middle_div = document.getElementById("middle");

            for (let i = 0; i < posts.length; i++) {
                // Create a div for the post
                let post_div = document.createElement('div');
                post_div.className = 'post';

                // Create a div for the post header
                let header_div = document.createElement('div');
                header_div.className = 'postheader';
                
                // Content of the post header
                let profile_pic = document.createElement('img');
                profile_pic.src = posts[i].profile_pic;
                profile_pic.alt = "Profile picture";
                let date = document.createElement('p');
                date.innerText = posts[i].date;

                // Append header content to the header
                header_div.appendChild(profile_pic);
                header_div.appendChild(date);

                // Append header div to the post div
                post_div.appendChild(header_div);

                // Check if the json object has an 'image_url' key
                if (posts[i].hasOwnProperty('img')) {
                    // Create an image element for the post image
                    let post_image = document.createElement('img');
                    post_image.src = posts[i].img;
                    post_image.alt = "Post image";

                    // Append the image to the post div
                    post_div.appendChild(post_image);
                }

                // Main text of the post
                let text = document.createElement('p');
                text.innerText = posts[i].text;
                post_div.appendChild(text);

                // Create a div for the post footer
                let footer_div = document.createElement('div');
                footer_div.className = "postfooter";

                // Create the like icon
                let like_icon = document.createElement('img');
                like_icon.src = "res/images/like.png";
                like_icon.alt = "Like icon"

                footer_div.appendChild(like_icon)
                post_div.appendChild(footer_div)
                middle_div.appendChild(post_div)
                
            }

        }).catch(err => {
            const middle_div = document.getElementById("middle");
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            // document.body.appendChild(errDiv);
            middle_div.appendChild(errDiv)
            })
    */
    

    // Fetch data from a local file
    fetch('res/json/posts.json')
    .then((response) => response.json())
    .then(json => {
        console.log(json);

        // Get the middle div where posts will be appended
        const middle_div = document.getElementById("middle");

        for (let i = 0; i < json.length; i++) {
            // Create a div for the post
            let post_div = document.createElement('div');
            post_div.className = 'post';

            // Create a div for the post header
            let header_div = document.createElement('div');
            header_div.className = 'postheader';
            
            // Content of the post header
            let profile_pic = document.createElement('img');
            profile_pic.src = json[i].profile_pic;
            profile_pic.alt = "Profile picture";
            let date = document.createElement('p');
            date.innerText = json[i].date;

            // Append header content to the header
            header_div.appendChild(profile_pic);
            header_div.appendChild(date);

            // Append header div to the post div
            post_div.appendChild(header_div);

            // Check if the json object has an 'image_url' key
            if (json[i].hasOwnProperty('img')) {
                // Create an image element for the post image
                let post_image = document.createElement('img');
                post_image.src = json[i].img;
                post_image.alt = "Post image";

                // Append the image to the post div
                post_div.appendChild(post_image);
            }

            // Main text of the post
            let text = document.createElement('p');
            text.innerText = json[i].text;
            post_div.appendChild(text);

            // Create a div for the post footer
            let footer_div = document.createElement('div');
            footer_div.className = "postfooter";

            // Create the like icon
            let like_icon = document.createElement('img');
            like_icon.src = "res/images/like.png";
            like_icon.alt = "Like icon"

            footer_div.appendChild(like_icon)
            post_div.appendChild(footer_div)
            middle_div.appendChild(post_div)
            
        }

    }).catch(err => {
        const middle_div = document.getElementById("middle");
        let errDiv = document.createElement("div");
        errDiv.className = 'post';
        errDiv.innerText = err;
        // document.body.appendChild(errDiv);
        middle_div.appendChild(errDiv)
        })
}