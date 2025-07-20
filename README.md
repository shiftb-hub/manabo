This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## ER

```mermaid
erDiagram
  USER {
    INT id PK
    STRING supabaseUserId UNIQUE
    INT roleId
    STRING nickName
    DATETIME createdAt
    DATETIME updatedAt
  }

  PROFILE {
    INT id PK
    INT userId UNIQUE FK
    STRING firstName
    STRING lastName
    DATETIME dateOfBirth
    STRING gender
    STRING profilePicture
    STRING bio
    STRING phoneNumber
    STRING socialLinks
    INT prefecture
    DATETIME createdAt
    DATETIME updatedAt
  }

  PREFECTURE {
    INT id PK
    STRING name UNIQUE
    INT parentId FK
  }

  LEARNINGGOAL {
    INT id PK
    INT userId UNIQUE FK
    FLOAT targetTime
    DATETIME createdAt
    DATETIME updatedAt
  }

  LEARNINGDAILYRECORD {
    INT id PK
    INT userId FK
    INT year
    DATETIME day
    FLOAT totalTime
    DATETIME createdAt
    DATETIME updatedAt
  }

  LEARNINGWEEKRECORD {
    INT id PK
    INT userId FK
    INT year
    DATETIME week
    FLOAT totalTime
    DATETIME createdAt
    DATETIME updatedAt
  }

  LEARNINGMONTHRECORD {
    INT id PK
    INT userId FK
    INT year
    INT month
    FLOAT totalTime
    DATETIME createdAt
    DATETIME updatedAt
  }

  LEARNINGRECORD {
    INT id PK
    INT userId FK
    INT categoryId
    STRING title
    STRING content
    DATETIME startTime
    DATETIME endTime
    FLOAT duration
    DATETIME learningDate
    DATETIME createdAt
    DATETIME updatedAt
  }

  LEARNINGRECORDCATEGORY {
    INT id PK
    INT learningRecordId FK
    INT categoryId FK
  }

  CATEGORY {
    INT id PK
    STRING categoryName
    INT parentId
  }

  SNSPOSTRECORD {
    INT id PK
    INT userId FK
    STRING snsTitle
    STRING content
    DATETIME createdAt
    DATETIME updatedAt
  }

  SNSPOSTSTONE {
    INT id PK
    STRING tonePattern
    STRING description
    DATETIME createdAt
    DATETIME updatedAt
  }

  USER ||--o{ PROFILE : has
  USER ||--o{ LEARNINGGOAL : has
  USER ||--o{ LEARNINGDAILYRECORD : has
  USER ||--o{ LEARNINGWEEKRECORD : has
  USER ||--o{ LEARNINGMONTHRECORD : has
  USER ||--o{ LEARNINGRECORD : has
  USER ||--o{ SNSPOSTRECORD : has

  PREFECTURE ||--o{ PREFECTURE : parent_of

  LEARNINGRECORD ||--o{ LEARNINGRECORDCATEGORY : has
  CATEGORY ||--o{ LEARNINGRECORDCATEGORY : has


```