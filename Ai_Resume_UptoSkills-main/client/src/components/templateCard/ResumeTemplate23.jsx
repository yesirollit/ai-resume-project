import { useState } from "react";

export default function ResumeTemplate() {
  const colorMap = {
    darkBlue: "bg-[#001a20]",
    teal: "bg-[#086f5b]",
    navy: "bg-[#062e48]",
    green: "bg-[#043927]",
    ocean: "bg-[#033f4e]",
    maroon: "bg-[#4d0604]",
  };

  const TextColorMap = {
    darkBlue: "text-[#001a20]",
    teal: "text-[#086f5b]",
    navy: "text-[#062e48]",
    green: "text-[#043927]",
    ocean: "text-[#033f4e]",
    maroon: "text-[#4d0604]",
  };

  // Default profile image placeholder
  const defaultProfile =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='100' fill='%23e5e7eb'/%3E%3Ccircle cx='100' cy='80' r='30' fill='%23374151'/%3E%3Cpath d='M60 140c0-20 20-40 40-40s40 20 40 40v20H60v-20z' fill='%23374151'/%3E%3C/svg%3E";

  const [resume, setResume] = useState({
    name: "ISABELLA SMITH",
    title: "Freelancer & Creative Director",
    contact: {
      phone: "+1 123 456 7890",
      email: "youremail@email.com",
      address: "Country, City, Zip",
      website: "www.website.com",
    },
    education: [
      {
        major: "Enter Your Major",
        university: "University Name",
        years: "2004 - 2007",
      },
      {
        major: "Enter Your Major",
        university: "University Name",
        years: "2004 - 2007",
      },
    ],
    skills: [
      "Management",
      "Budgeting",
      "Team Leadership",
      "Accountability",
      "Customer Service",
      "Creativity",
      "Improving Efficiency",
      "Project Planning",
    ],
    refrence: [
      {
        name: "Krishnanmurti Iyer ",
        gmail: "murti@gmail.com",
        profession: "Author",
      },
      {
        name: "Radhagoswami Iyer ",
        gmail: "radha@gmail.com",
        profession: "Doctor",
      },
    ],
    profile:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    experience: [
      {
        title: "Your Job Title Goes Here",
        company: "Company Name",
        years: "2005 - 2010",
        bullets: [
          "Lorem Ipsum has been the industry's standard dummy text.",
          "It has survived not only five centuries.",
          "When an unknown printer took a galley of type.",
        ],
      },
      {
        title: "Your Job Title Goes Here",
        company: "Company Name",
        years: "2011 - 2016",
        bullets: [
          "Lorem Ipsum has been the industry's standard dummy text.",
          "Used in typesetting industry since the 1500s.",
          "It has survived not only five centuries.",
        ],
      },
    ],
    achivements: [
      {
        title: "Domain name ",
        company: "Company Name",
        years: "XXXX-XXXX",
        bullets: [
          "Lorem Ipsum has been the industry's standard dummy text.",
          "It is a great experience for me .",
          "I learned a lot of amazing things in this XYZ company.",
        ],
      },
      {
        title: "Domain name ",
        company: "Company Name",
        years: "XXXX-XXXX",
        bullets: [
          "Lorem Ipsum has been the industry's standard dummy text.",
          "working on different langauages.",
          "enhance my communication skills and well as technical skills ",
        ],
      },
    ],
    image: null,
    font: "serif",
    allFont: [
      "Impact",
      "serif",
      "Verdana",
      "cursive",
      "Arial",
      "Noto",
      "Gill Sans",
      "Franklin Gothic Medium",
      "Century Gothic",
      "Calibri",
    ],
    Color: "navy",
    TextColor: ["darkBlue", "teal", "navy", "green", "ocean", "maroon"],
    textColor: "navy",
    text: ["darkBlue", "teal", "navy", "green", "ocean", "maroon"],
  });

  const change = (field, value) => {
    setResume({
      ...resume,
      ...(typeof field === "object" ? field : { [field]: value }),
    });
  };

  const remove = (field, index) => {
    const temp = [...resume[field]];
    temp.splice(index, 1);
    change(field, temp);
  };

  const add = (newSection, area) => {
    const update = [...resume[newSection], area];
    change(newSection, update);
  };

  const [opt, changeOpt] = useState(false);
  const [Ai, changeAi] = useState(false);
  const [text, setText] = useState(false);
  const [show, setShow] = useState(false);

  const optChange = () => {
    changeOpt((prev) => !prev);
  };

  const AiChange = () => {
    changeAi((prev) => !prev);
  };

  const textChange = () => {
    setText((prev) => !prev);
  };

  const changeColor = (e) => {
    const temp = e.target.innerText;
    change({
      textColor: temp,
      Color: temp,
    });
  };

  const changeText = (e) => {
    const temp = e.target.innerText;
    change("font", temp);
  };

  const changeShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="flex bg-gray-200 lg:flex-row flex-col">
      {/* buttons */}
      <div className="w-full lg:w-[18%] bg-gray-50 flex flex-col pb-9 items-center px-2 py-10 lg:rounded-r-4xl">
        <h1 className="text-center text-[1.8rem] font-bold">Resume Tools</h1>
        <div className="w-full place-items-center lg:w-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-col">
          {/* Download Button */}
          <button className="w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white cursor-pointer bg-[#9a2b38]">
            Download PDF
          </button>

          {/* upload button */}
          <div className="flex flex-col items-center justify-center">
            <button
              onClick={optChange}
              className="w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#2a499d] cursor-pointer"
            >
              Upload Resume
            </button>
            {opt && (
              <div className="bg-gray-200 mt-2 p-2 rounded-[15px] sm:w-[80%] flex flex-col gap-2 text-black font-bold items-center justify-center">
                <button className="bg-gray-400 p-2 w-[100px] sm:w-[100%] text-[0.8rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">
                  Manual Edit
                </button>
                <button className="bg-gray-400 p-2 w-[100px] sm:w-[100%] text-[0.8rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">
                  Ai Edit
                </button>
              </div>
            )}
          </div>

          {/* colours */}
          <div className="flex flex-col items-center justify-between">
            <button
              onClick={textChange}
              className="w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#540B14]"
            >
              Change Colours
            </button>

            {text && (
              <div className="mx-1 p-2 mt-2 bg-gray-900 rounded grid grid-cols-3 lg:grid-cols-2 gap-2">
                {resume.TextColor.map((elm, idx) => (
                  <div
                    key={idx}
                    onClick={changeColor}
                    className="bg-gray-300 flex items-center justify-center text-black p-2 rounded-[5px] text-[0.6rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1.1rem] cursor-pointer"
                  >
                    {elm}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#10502e]">
            Save Changes
          </button>
          <button className="w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#18113b]">
            Share Resume
          </button>

          {/* ai assistance */}
          <div className="flex flex-col items-center justify-center">
            <button
              onClick={AiChange}
              className="w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#034e5f]"
            >
              Ai Assistance
            </button>
            {Ai && (
              <div className="bg-gray-200 mt-2 p-2 rounded-[15px] sm:w-[80%] flex items-center flex-col gap-2 text-black font-bold">
                <button className="bg-gray-400 p-2 w-[100px] sm:w-[100%] text-[0.8rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">
                  Enhance Experience
                </button>
                <button className="bg-gray-400 p-2 w-[100px] sm:w-[100%] text-[0.8rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">
                  Improve Achievements
                </button>
                <button className="bg-gray-400 p-2 w-[100px] sm:w-[100%] text-[0.8rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">
                  Enhance Summary
                </button>
              </div>
            )}
          </div>

          {/* font buttons */}
          <div className="flex flex-col items-center justify-between">
            <button
              onClick={changeShow}
              className="w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#9a2b38]"
            >
              Change Font
            </button>
            {show && (
              <div className="mx-4 p-4 mt-2 bg-gray-900 rounded grid grid-cols-2 gap-2">
                {resume.allFont.map((elm, idx) => (
                  <div
                    key={idx}
                    onClick={changeText}
                    className="bg-gray-300 flex items-center justify-center text-black p-1 rounded-[5px] text-[0.8rem] lg:text-[1rem] xl:text-[1.1rem] cursor-pointer"
                  >
                    {elm}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* resume */}
      <div
        className="w-[95vw] lg:w-[80vw] xl:w-[70vw] mx-auto mb-5 bg-white p-3 rounded-lg shadow-lg font-sans mt-10"
        style={{ fontFamily: resume.font }}
      >
        {/* Header */}
        <div
          className={`flex sm:w-auto w-full justify-evenly border-b items-center gap-1 p-1 ${
            colorMap[resume.textColor]
          }`}
        >
          {/* name */}
          <div className="flex flex-col bg-black">
            <input
              className={`font-bold text-[1.2rem] md:text-[3rem] w-full pl-2 outline-none bg-gray-200 ${
                TextColorMap[resume.Color]
              }`}
              value={resume.name}
              onChange={(e) => change("name", e.target.value)}
            />
            <input
              className="text-gray-500 pl-2 text-[0.4rem] md:text-[1.2rem] uppercase bg-gray-200 outline-none"
              value={resume.title}
              onChange={(e) => change("title", e.target.value)}
            />
          </div>

          {/* image */}
          <div className="m-0 flex flex-col items-center justify-center">
            <img
              src={resume.image || defaultProfile}
              alt="Profile"
              className="w-30 h-30 sm:w-50 sm:h-50 bg-amber-400 rounded-full object-cover"
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const imageURL = URL.createObjectURL(file);
                  change("image", imageURL);
                }
              }}
              className="mb-3 w-[25%] md:w-[65%] text-[0.7rem] md:text-[1rem] mt-2 text-gray-400"
            />
          </div>
        </div>

        <div className="bg-white pt-2 font-sans flex md:flex-row flex-col-reverse">
          {/* left */}
          <div
            className="space-y-6 p-5 w-full md:w-[30%] md:border-r-2 md:border-gray-200"
            style={{ fontFamily: resume.font }}
          >
            {/* contact */}
            <div className="md:block hidden">
              <h2
                className={`font-bold text-lg border-b-2 ${
                  TextColorMap[resume.Color]
                }`}
              >
                CONTACT
              </h2>
              <p>
                <input
                  className="w-full outline-none"
                  value={resume.contact.phone}
                  onChange={(e) =>
                    setResume({
                      ...resume,
                      contact: { ...resume.contact, phone: e.target.value },
                    })
                  }
                />
              </p>
              <p>
                <input
                  className="w-full outline-none"
                  value={resume.contact.email}
                  onChange={(e) =>
                    setResume({
                      ...resume,
                      contact: { ...resume.contact, email: e.target.value },
                    })
                  }
                />
              </p>
              <p>
                <input
                  className="w-full outline-none"
                  value={resume.contact.address}
                  onChange={(e) =>
                    setResume({
                      ...resume,
                      contact: { ...resume.contact, address: e.target.value },
                    })
                  }
                />
              </p>
              <p>
                <input
                  className="w-full outline-none"
                  value={resume.contact.website}
                  onChange={(e) =>
                    setResume({
                      ...resume,
                      contact: { ...resume.contact, website: e.target.value },
                    })
                  }
                />
              </p>
            </div>

            {/* education */}
            <div>
              <div className="flex justify-between border-b-2 space-y-1">
                <h2
                  className={`font-bold text-lg ${TextColorMap[resume.Color]}`}
                >
                  EDUCATION
                </h2>
                <button
                  onClick={() =>
                    add("education", {
                      major: "enter your course",
                      university: " University name",
                      years: "XXXX",
                    })
                  }
                  className="text-blue-600 text-sm mt-1"
                >
                  + Add
                </button>
              </div>

              {resume.education.map((edu, i) => (
                <div key={i} className="mt-2">
                  <input
                    className="font-semibold w-full outline-none"
                    value={edu.major}
                    onChange={(e) => {
                      const newEdu = [...resume.education];
                      newEdu[i].major = e.target.value;
                      change("education", newEdu);
                    }}
                  />
                  <input
                    className="text-sm text-gray-500 w-full outline-none"
                    value={`${edu.university} | ${edu.years}`}
                    onChange={(e) => {
                      const [university, years] = e.target.value.split("|");
                      const newEdu = [...resume.education];
                      newEdu[i].university = university.trim();
                      newEdu[i].years = years?.trim() || "";
                      change("education", newEdu);
                    }}
                  />
                  <button
                    className="text-red-500"
                    onClick={() => remove("education", i)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* skills */}
            <div>
              <div className="flex justify-between border-b-2 space-y-1">
                <h2
                  className={`font-bold text-lg ${TextColorMap[resume.Color]}`}
                >
                  Skills
                </h2>
                <button
                  onClick={() => add("skills", "New skill")}
                  className="text-blue-600 text-sm mt-1"
                >
                  + Add
                </button>
              </div>

              <ul className="list-disc ml-4 mt-2 text-sm text-gray-700">
                {resume.skills.map((skill, i) => (
                  <li key={i} className="flex">
                    <input
                      className="w-full outline-none"
                      value={skill}
                      onChange={(e) => {
                        const newSkills = [...resume.skills];
                        newSkills[i] = e.target.value;
                        change("skills", newSkills);
                      }}
                    />
                    <button
                      className="text-red-500"
                      onClick={() => remove("skills", i)}
                    >
                      x
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* references */}
            <div>
              <div className="flex justify-between border-b-2 space-y-1">
                <h2
                  className={`font-bold text-lg ${TextColorMap[resume.Color]}`}
                >
                  REFERENCES
                </h2>
                <button
                  onClick={() =>
                    add("refrence", {
                      name: "Adin Smith ",
                      gmail: "adin@gmail.com",
                      profession: "Engineer",
                    })
                  }
                  className="text-blue-600 text-sm mt-1"
                >
                  + Add
                </button>
              </div>

              {resume.refrence.map((ref, i) => (
                <div key={i} className="mt-2">
                  <input
                    className="font-semibold w-full outline-none"
                    value={ref.name}
                    onChange={(e) => {
                      const newRef = [...resume.refrence];
                      newRef[i].name = e.target.value;
                      change("refrence", newRef);
                    }}
                  />
                  <input
                    className="text-sm text-gray-500 w-full outline-none"
                    value={`${ref.gmail} | ${ref.profession}`}
                    onChange={(e) => {
                      const [gmail, prof] = e.target.value.split("|");
                      const newRef = [...resume.refrence];
                      newRef[i].gmail = gmail.trim();
                      newRef[i].profession = prof?.trim() || "";
                      change("refrence", newRef);
                    }}
                  />
                  <button
                    className="text-red-500"
                    onClick={() => remove("refrence", i)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* right */}
          <div
            className="w-full p-5 md:w-[calc(100%-30%)] space-y-6"
            style={{ fontFamily: resume.font }}
          >
            {/* contact mobile */}
            <div className="md:hidden block">
              <h2
                className={`font-bold text-lg border-b-2 ${
                  TextColorMap[resume.Color]
                }`}
              >
                CONTACT
              </h2>
              <p>
                <input
                  className="w-full outline-none"
                  value={resume.contact.phone}
                  onChange={(e) =>
                    setResume({
                      ...resume,
                      contact: { ...resume.contact, phone: e.target.value },
                    })
                  }
                />
              </p>
              <p>
                <input
                  className="w-full outline-none"
                  value={resume.contact.email}
                  onChange={(e) =>
                    setResume({
                      ...resume,
                      contact: { ...resume.contact, email: e.target.value },
                    })
                  }
                />
              </p>
              <p>
                <input
                  className="w-full outline-none"
                  value={resume.contact.address}
                  onChange={(e) =>
                    setResume({
                      ...resume,
                      contact: { ...resume.contact, address: e.target.value },
                    })
                  }
                />
              </p>
              <p>
                <input
                  className="w-full outline-none"
                  value={resume.contact.website}
                  onChange={(e) =>
                    setResume({
                      ...resume,
                      contact: { ...resume.contact, website: e.target.value },
                    })
                  }
                />
              </p>
            </div>

            {/* profile info */}
            <div>
              <h2
                className={`font-bold text-lg border-b-2 ${
                  TextColorMap[resume.Color]
                }`}
              >
                PROFILE
              </h2>
              <textarea
                className="text-sm text-gray-700 mt-2 w-full outline-none resize-none p-2 text-justify"
                value={resume.profile}
                rows={5}
                onChange={(e) => change("profile", e.target.value)}
              />
            </div>

            {/* experience */}
            <div>
              <div className="flex justify-between border-b-2 space-y-1">
                <h2
                  className={`font-bold text-lg ${TextColorMap[resume.Color]}`}
                >
                  WORKING EXPERIENCE
                </h2>
                <button
                  onClick={() =>
                    add("experience", {
                      title: "Your Job Title Goes Here",
                      company: "Company Name",
                      years: "XXXX - XXXX",
                      bullets: [
                        "Lorem Ipsum has been the industry's standard dummy text.",
                        "It has survived not only five centuries.",
                        "When an unknown printer took a galley of type.",
                      ],
                    })
                  }
                  className="text-blue-600 text-sm mt-1"
                >
                  + Add
                </button>
              </div>

              {resume.experience.map((job, idx) => (
                <div key={idx} className="mt-4">
                  <input
                    className="font-semibold w-full outline-none"
                    value={job.title}
                    onChange={(e) => {
                      const newJobs = [...resume.experience];
                      newJobs[idx].title = e.target.value;
                      change("experience", newJobs);
                    }}
                  />
                  <input
                    className="text-sm text-gray-500 w-full outline-none"
                    value={`${job.company} | ${job.years}`}
                    onChange={(e) => {
                      const [company, years] = e.target.value.split("|");
                      const newJobs = [...resume.experience];
                      newJobs[idx].company = company.trim();
                      newJobs[idx].years = years?.trim() || "";
                      change("experience", newJobs);
                    }}
                  />
                  <ul className="list-disc ml-5 text-sm text-gray-700 mt-2">
                    {job.bullets.map((bullet, i) => (
                      <li key={i}>
                        <input
                          className="w-full outline-none"
                          value={bullet}
                          onChange={(e) => {
                            const newJobs = [...resume.experience];
                            newJobs[idx].bullets[i] = e.target.value;
                            change("experience", newJobs);
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                  <button
                    className="text-red-500"
                    onClick={() => remove("experience", idx)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* achievements */}
            <div>
              <div className="flex justify-between border-b-2 space-y-1">
                <h2
                  className={`font-bold text-lg ${TextColorMap[resume.Color]}`}
                >
                  CERTIFICATES AND ACHIEVEMENTS
                </h2>
                <button
                  onClick={() =>
                    add("achivements", {
                      title: "Domain name ",
                      company: "Company Name",
                      years: "XXXX - XXXX",
                      bullets: [
                        "Lorem Ipsum has been the industry's standard dummy text.",
                        "It has survived not only five centuries.",
                        "When an unknown printer took a galley of type.",
                      ],
                    })
                  }
                  className="text-blue-600 text-sm mt-1"
                >
                  + Add
                </button>
              </div>

              {resume.achivements.map((job, idx) => (
                <div key={idx} className="mt-4">
                  <input
                    className="font-semibold w-full outline-none"
                    value={job.title}
                    onChange={(e) => {
                      const newJobs = [...resume.achivements];
                      newJobs[idx].title = e.target.value;
                      change("achivements", newJobs);
                    }}
                  />
                  <input
                    className="text-sm text-gray-500 w-full outline-none"
                    value={`${job.company} | ${job.years}`}
                    onChange={(e) => {
                      const [company, years] = e.target.value.split("|");
                      const newJobs = [...resume.achivements];
                      newJobs[idx].company = company.trim();
                      newJobs[idx].years = years?.trim() || "";
                      change("achivements", newJobs);
                    }}
                  />
                  <ul className="list-disc ml-5 text-sm text-gray-700 mt-2">
                    {job.bullets.map((bullet, i) => (
                      <li key={i}>
                        <input
                          className="w-full outline-none"
                          value={bullet}
                          onChange={(e) => {
                            const newJobs = [...resume.achivements];
                            newJobs[idx].bullets[i] = e.target.value;
                            change("achivements", newJobs);
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                  <button
                    className="text-red-500"
                    onClick={() => remove("achivements", idx)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
