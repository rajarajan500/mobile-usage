import React from "react";
import Safsub from "./Safsub";

function Saf() {
  return (
    <div className="flex flex-col justify-center  items-center pt-5">
      <h1 className="font-bold">
        Safety and management Strategies for Parents :
      </h1>
      <Safsub
        Title={"USE PARENTAL CONTROLS"}
        Sub={
          "Tools like Google Family Link allow parents to set daily time limits, manage app downloads, and lock devices remotely."
        }
      />
      <Safsub
        Title={"MODEL HEALTHY HABITS"}
        Sub={
          "Children often mimic their parents; limiting your own screen time is one of the strongest predictors of a child healthy usage."
        }
      />
      <Safsub
        Title={"ESTABLISH TECH-FREE ZONES"}
        Sub={
          'Designate areas like the dining table and bedrooms as "phone-free" to encourage real-world interaction.'
        }
      />
      <Safsub
        Title={"WAIT UNTIL 8TH"}
        Sub={
          "Many experts suggest delaying a personal smartphone until the end of 8th grade (approx. age 14) to allow for solid emotional development."
        }
      />
      <Safsub
        Title={"EDUCATE ON DIGITAL SAFETY"}
        Sub={
          "Use resources like Common Sense Media to review app age-appropriateness and teach children about privacy and cyberbullying."
        }
      />
    </div>
  );
}

export default Saf;
