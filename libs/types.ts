import { Session } from 'next-auth'

export type CategoryType = {
    id:string
    slug:string
    title:string
    img:string
    color:string
}

export interface searchParams {
    searchParams: {
      page: string | '' ;
      cat?: string | '' ;
    };
  }

export interface PostType {
    id: string;
    createdAt: string;
    slug: string;
    title: string;
    desc: string;
    img?: string | null; 
    views: number;
    catSlug: string;
    cat: {
      slug: string;
    };
    userEmail: string;
    user: {
      email: string;
    };
    comments: CommentType[];
  }

export interface CommentType {
    id: string;
    createdAt: string;
    desc: string;
    userEmail: string;
    user: UserType
    postSlug: string;
    post: PostType
  }

export interface UserType {
    id: string;
    name?: string | null;
    email: string;
    emailVerified?: string | null;
    image?: string | null;
    accounts: AccountType[]; 
    sessions: SessionType[]; 
    Post: PostType[]; 
    Comment: CommentType[]; 
  }

export interface AccountType {
    id: string;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
    user: UserType;
  }
  
  // Session type
  export interface SessionType {
    id: string;
    sessionToken: string;
    userId: string;
    expires: Date;
    user: UserType;
  }
  