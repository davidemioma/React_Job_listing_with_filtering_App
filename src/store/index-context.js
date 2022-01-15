import { createContext, useReducer } from "react";

const IndexContext = createContext({
  jobListing: [],
  jobFilters: [],
  addFilter: (item) => {},
  removeFilter: (item) => {},
  clearFilter: () => {},
});

const defaultState = {
  filters: [],
};

const filterReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingdItem = state.filters.find((item) => item === action.value);

    let updatedFilters;

    if (!existingdItem) {
      updatedFilters = state.filters.concat(action.value);
    } else {
      updatedFilters = state.filters;
    }

    return {
      filters: updatedFilters,
    };
  }

  if (action.type === "REMOVE") {
    const existingdItem = state.filters.find((item) => item === action.value);

    let updatedFilters;

    if (existingdItem) {
      updatedFilters = state.filters.filter((item) => item !== action.value);
    } else {
      updatedFilters = state.filters;
    }

    return {
      filters: updatedFilters,
    };
  }

  if (action.type === "CLEAR") {
    const updatedFilters = [];

    return {
      filters: updatedFilters,
    };
  }

  return defaultState;
};

export const IndexContextProvider = (props) => {
  const [filterState, dispatch] = useReducer(filterReducer, defaultState);

  const addFilterHandler = (item) => {
    dispatch({ type: "ADD", value: item });
  };

  const removeFilterHandler = (item) => {
    dispatch({ type: "REMOVE", value: item });
  };

  const clearFiltersHandler = () => {
    dispatch({ type: "CLEAR" });
  };

  const contextValue = {
    jobListing: [
      {
        id: 1,
        company: "Photosnap",
        logo: "https://raw.githubusercontent.com/nkhatri7/Frontend-Mentor-Challenges/main/job-listings/src/assets/photosnap.svg",
        new: true,
        featured: true,
        position: "Senior Frontend Developer",
        role: "Frontend",
        level: "Senior",
        postedAt: "1d ago",
        contract: "Full Time",
        location: "USA Only",
        languages: ["HTML", "CSS", "JavaScript"],
        tools: [],
      },
      {
        id: 2,
        company: "Manage",
        logo: "https://raw.githubusercontent.com/nkhatri7/Frontend-Mentor-Challenges/main/job-listings/src/assets/manage.svg",
        new: true,
        featured: true,
        position: "Fullstack Developer",
        role: "Fullstack",
        level: "Midweight",
        postedAt: "1d ago",
        contract: "Part Time",
        location: "Remote",
        languages: ["Python"],
        tools: ["React"],
      },
      {
        id: 3,
        company: "Account",
        logo: "https://raw.githubusercontent.com/nkhatri7/Frontend-Mentor-Challenges/main/job-listings/src/assets/account.svg",
        new: true,
        featured: false,
        position: "Junior Frontend Developer",
        role: "Frontend",
        level: "Junior",
        postedAt: "2d ago",
        contract: "Part Time",
        location: "USA Only",
        languages: ["JavaScript"],
        tools: ["React", "Sass"],
      },
      {
        id: 4,
        company: "MyHome",
        logo: "https://raw.githubusercontent.com/nkhatri7/Frontend-Mentor-Challenges/main/job-listings/src/assets/myhome.svg",
        new: false,
        featured: false,
        position: "Junior Frontend Developer",
        role: "Frontend",
        level: "Junior",
        postedAt: "5d ago",
        contract: "Contract",
        location: "USA Only",
        languages: ["CSS", "JavaScript"],
        tools: [],
      },
      {
        id: 5,
        company: "Loop Studios",
        logo: "https://raw.githubusercontent.com/nkhatri7/Frontend-Mentor-Challenges/main/job-listings/src/assets/loop-studios.svg",
        new: false,
        featured: false,
        position: "Software Engineer",
        role: "Fullstack",
        level: "Midweight",
        postedAt: "1w ago",
        contract: "Full Time",
        location: "Worldwide",
        languages: ["JavaScript"],
        tools: ["Ruby", "Sass"],
      },
      {
        id: 6,
        company: "FaceIt",
        logo: "https://raw.githubusercontent.com/nkhatri7/Frontend-Mentor-Challenges/main/job-listings/src/assets/faceit.svg",
        new: false,
        featured: false,
        position: "Junior Backend Developer",
        role: "Backend",
        level: "Junior",
        postedAt: "2w ago",
        contract: "Full Time",
        location: "UK Only",
        languages: ["Ruby"],
        tools: ["RoR"],
      },
      {
        id: 7,
        company: "Shortly",
        logo: "https://raw.githubusercontent.com/nkhatri7/Frontend-Mentor-Challenges/main/job-listings/src/assets/shortly.svg",
        new: false,
        featured: false,
        position: "Junior Developer",
        role: "Frontend",
        level: "Junior",
        postedAt: "2w ago",
        contract: "Full Time",
        location: "Worldwide",
        languages: ["HTML", "JavaScript"],
        tools: ["Sass"],
      },
      {
        id: 8,
        company: "Insure",
        logo: "https://raw.githubusercontent.com/nkhatri7/Frontend-Mentor-Challenges/main/job-listings/src/assets/insure.svg",
        new: false,
        featured: false,
        position: "Junior Frontend Developer",
        role: "Frontend",
        level: "Junior",
        postedAt: "2w ago",
        contract: "Full Time",
        location: "USA Only",
        languages: ["JavaScript"],
        tools: ["Vue", "Sass"],
      },
      {
        id: 9,
        company: "Eyecam Co.",
        logo: "https://raw.githubusercontent.com/nkhatri7/Frontend-Mentor-Challenges/main/job-listings/src/assets/eyecam-co.svg",
        new: false,
        featured: false,
        position: "Full Stack Engineer",
        role: "Fullstack",
        level: "Midweight",
        postedAt: "3w ago",
        contract: "Full Time",
        location: "Worldwide",
        languages: ["JavaScript", "Python"],
        tools: ["Django"],
      },
      {
        id: 10,
        company: "The Air Filter Company",
        logo: "https://raw.githubusercontent.com/nkhatri7/Frontend-Mentor-Challenges/main/job-listings/src/assets/the-air-filter-company.svg",
        new: false,
        featured: false,
        position: "Front-end Dev",
        role: "Frontend",
        level: "Junior",
        postedAt: "1mo ago",
        contract: "Part Time",
        location: "Worldwide",
        languages: ["JavaScript"],
        tools: ["React", "Sass"],
      },
    ],
    jobFilters: filterState.filters,
    addFilter: addFilterHandler,
    removeFilter: removeFilterHandler,
    clearFilter: clearFiltersHandler,
  };

  return (
    <IndexContext.Provider value={contextValue}>
      {props.children}
    </IndexContext.Provider>
  );
};

export default IndexContext;
