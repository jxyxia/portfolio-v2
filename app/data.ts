type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'M-it - Minimal Git Client',
    description:
      'working on m-it, a minimal git client for when i’m tired of typing full git commands.',
    link: 'https://example.com/',
    video:
      '/videos/m-it.mp4',
    id: 'project1',
  },
  {
    name: 'Grain - Minimal Blockchain in Go',
    description: 'creating a go-based blockchain from scratch to explore distributed systems.',
    link: 'https://example.com/',
    video:
      '/videos/grain.mp4',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelance',
    title: 'Full-stack Developer',
    start: '2024',
    end: 'Present',
    link: 'https://linkedin.com/in/jayesh0735',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2023',
    end: '2024',
    link: 'https://linkedin.com/in/jayesh0735',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Why I’m Transitioning into AI',
    description: 'How AI is changing the way we design',
    link: '/blog/why-im-transitioning-into-ai',
    uid: 'blog-1',
  },
  {
    title: 'What Full-Stack Development Taught Me Before AI',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/what-fullstack-taught-me-before-ai',
    uid: 'blog-2',
  },
  {
    title: 'Leaving My Comfort Zone',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/leaving-my-comfort-zone',
    uid: 'blog-3',
  },
  {
    title: 'Building Products That Don’t Crash',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/building-products-that-dont-crash',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/jxyxia',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/jxyxia',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jayesh0735',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/cloudhazes',
  },
]

export const EMAIL = 'jayesh.workarchive@email.com'
