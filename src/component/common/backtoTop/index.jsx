import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function BackToTop() {
  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div
      id="myBtn"
      style={{
        position: "fixed",
        right: "1.5rem ",
        bottom: "1.5rem ",
        cursor: "pointer",
      }}
     onClick={()=>topFunction()}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "48px",
          height: "48px",
          backgroundColor: "var(--blue)",
          color: "var(--white)",
          borderRadius: "50%",
        }}
      >
        <KeyboardArrowUpIcon />
      </div>
    </div>
  );
}

export default BackToTop;
