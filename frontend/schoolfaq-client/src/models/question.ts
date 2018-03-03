import { Category } from "./category";
import * as moment from 'moment';

export class Question {
    id: number;
    subject: string;
    text: string;
    categoryId: number;
    questionerName: string;
    questionerPhone: string;
    likesCount: number;
    dislikesCount: number;
    category: Category;
    createdAt: moment.Moment;
    answererName: string;
    answer: string;
    answerDate: moment.Moment;
    isEditing: boolean;
}