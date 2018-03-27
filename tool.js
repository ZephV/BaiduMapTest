// {
//     let model = {
//         data: {
//             json: [],
//         },


//     }
// }

function getAttributId() {
    document.querySelectorAll(".wrap").addEventListener("click", function(e) {
        console.log("id=%s", e.target.id)
    });
}