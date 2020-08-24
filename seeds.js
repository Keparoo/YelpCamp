const mongoose = require("mongoose"),
    Campground = require("./models/campground");
    Comment   = require("./models/comment");
 
let data = [
    {
        name: "Camp Dyl Chill", 
        image: "https://images.unsplash.com/photo-1498227953826-450c4200f708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Camp Border Wall", 
        image: "https://images.unsplash.com/photo-1544239649-4238bf7bd7d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Eget lorem dolor sed viverra ipsum nunc aliquet. Quam lacus suspendisse faucibus interdum posuere lorem. Et leo duis ut diam quam nulla porttitor. Aenean sed adipiscing diam donec adipiscing tristique risus. Mauris augue neque gravida in fermentum. Ultricies integer quis auctor elit sed vulputate. Varius morbi enim nunc faucibus a pellentesque sit. Maecenas sed enim ut sem viverra aliquet eget sit amet."
    },
    {
        name: "Camp Make Me Dinner, Boy!", 
        image: "https://images.unsplash.com/photo-1499218727621-7642e7bfa048?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Sit amet massa vitae tortor. Faucibus interdum posuere lorem ipsum dolor. Lacus suspendisse faucibus interdum posuere lorem ipsum. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Ac turpis egestas integer eget aliquet nibh praesent tristique. Arcu cursus euismod quis viverra nibh cras pulvinar. Id aliquet lectus proin nibh."
    },
    {
        name: "Camp Peekaboo", 
        image: "https://images.unsplash.com/photo-1526011211067-04947caed386?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Risus commodo viverra maecenas accumsan lacus vel. Id volutpat lacus laoreet non curabitur gravida arcu. Faucibus in ornare quam viverra orci sagittis eu. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Turpis egestas pretium aenean pharetra. Cras tincidunt lobortis feugiat vivamus at. Sapien et ligula ullamcorper malesuada proin. Tempus iaculis urna id volutpat lacus laoreet non. Sed risus ultricies tristique nulla aliquet. Cursus risus at ultrices mi tempus."
    }
]
 
function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("removed campgrounds!");
        // Comment.remove({}, function(err) {
        //     if(err){
        //         console.log(err);
        //     }
        //     console.log("removed comments!");
        // //   add a few campgrounds
        //     data.forEach(function(seed){
        //         Campground.create(seed, function(err, campground){
        //             if(err){
        //                 console.log(err)
        //             } else {
        //                 console.log("added a campground");
        //                 //create a comment
        //                 Comment.create(
        //                     {
        //                         text: "This place is great, but I wish there was internet",
        //                         author: "Homer"
        //                     }, function(err, comment){
        //                         if(err){
        //                             console.log(err);
        //                         } else {
        //                             campground.comments.push(comment);
        //                             campground.save();
        //                             console.log("Created new comment");
        //                         }
        //                     });
        //             }
        //         });
        //     });
        // });
    }); 
}
 
module.exports = seedDB;