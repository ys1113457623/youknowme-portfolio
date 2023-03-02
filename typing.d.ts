interface SanityBody {
  _createdAt: number;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image{
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    addresses: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: string;
}

export interface Skills extends SanityBody {
    _type: "skills";
    image: Image;
    progres: number;
    title: string;
}

export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Skill[];
}

export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Skill[];
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}