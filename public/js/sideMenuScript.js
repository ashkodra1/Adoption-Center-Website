$(document).ready(function () { //once the html page has loaded
    const currentPath = window.location.pathname;//gets the current path

    $(".menu li").each(function () { //loops through every list item
      const linkPath = $(this).find("a").attr("href"); //gets the href inside of the anchor 

      // Exact match or homepage special case
      if (linkPath === currentPath || (linkPath === "/" && currentPath === "/")) { //check if the href is equal to the path
        $(this).addClass("active"); //if it is add the class active
      }
    });
  });