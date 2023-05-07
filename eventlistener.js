const pageConfig = [
    {
      pageID: 0,
      fileName: "index.html",
      amountOfCharacter: 6,
    },
    {
      pageID: 1,
      fileName: "modelguide.html",
      amountOfCharacter: 6,
    },
    {
    pageID: 2,
    fileName: "lore.html",
    amountOfCharacter: 2,
    },
    // Add more configurations for other pages as needed
  ];
  
  function getCurrentPageConfig() {
    const pathname = window.location.pathname;
    console.log(pathname,"obam")
    return pageConfig.find((config) => pathname.includes(config.fileName));
  }
  
  function setSessionStorage(id) {
    let currentPageConfig = getCurrentPageConfig();
    sessionStorage.setItem("id", [currentPageConfig.pageID, id]);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    let currentPageConfig = getCurrentPageConfig();
    let amountOfCharacter = currentPageConfig.amountOfCharacter;
  
    for (let i = 0; i < amountOfCharacter; i++) {
      let button = document.getElementById(`button${i + 1}`);
      console.log(button);
      button.addEventListener("click", () => setSessionStorage(i));
    }
  });
  