const navLinks = document.querySelectorAll(".nav-link");

for (let i = 0; i <= navLinks; i++) {
  console.log(navLinks);
}

let count = 0;
for (const link of navLinks) {
  link.addEventListener("click", () => {
    count = count + 1
    console.log(count)
    // link.add.classList = "activee"
    console.log(link);

   
    if(link.clicked){
        console.log('yes')
    }
    // if (count != 1) {
    //   link.setAttribute("class", "nav-link activee p-3");
    //   console.log(count);
    // } else{
    //     link.setAttribute("class", "nav-link p-3");

    // }
  });
}
