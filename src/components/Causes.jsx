import React from "react";
import Caspo from "./Caspo";

function Causes() {
  return (
    <div className="mt-10">
      <h1 className="font-bold text-xl text-center border border-black">
        &#128100; COMMON EFFECTS OF EXCESSIVE USAGE :
      </h1>
      <Caspo
        Title={"PHYSICAL HEALTH :"}
        Sub={
          'Risks include digital eye strain (dry eyes, blurred vision), sleep disruption due to blue light, and sedentary behaviors leading to obesity or poor posture ("text neck").'
        }
        sub1={"EYE STRAIN"}
        sub2={"NECK PAIN"}
        sub3={"HEADACHE"}
      />
      <Caspo
        Title={"MENTAL WELL-BEING :"}
        Sub={
          "High usage is linked to increased anxiety, depression, and social comparison, especially with early social media access."
        }
        sub1={"IRRITABILITY"}
        sub2={"ANXIETY"}
        sub3={"POOR FOCUS"}
      />
      <Caspo
        Title={"DEVELOPMENTAL :"}
        Sub={
          "Overuse can cause delays in language acquisition and social skills, as screen time often replaces face-to-face interaction."
        }

      />
      <Caspo
        Title={"ACADEMIC PERFORMANCE"}
        Sub={
          "Constant notifications and gaming apps often lead to distraction and lower grades. "
        }
        sub1={"LESS STUDY TIME"}
        sub2={"POOR PERFORMANCE"}
        sub3={"LOWER GRADES"}
      />
      <img data-aos='fade-in' src="https://img.theweek.in/content/dam/week/news/biz-tech/images/2021/2/27/Mobile-Usage.jpg" className=" mt-5 w-full"/>
    </div>
  );
}

export default Causes;
