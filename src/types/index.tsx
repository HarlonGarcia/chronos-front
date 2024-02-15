export interface ISvgProps {
  className?: string;
}

export interface IAuthResponse {
  accessToken: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  tasks: ITask[];
}

export interface ITask {
  id: string;
  title: string;
  createdAt: Date;
  finished: boolean;
}