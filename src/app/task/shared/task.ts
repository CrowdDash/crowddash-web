
import * as uuid4 from "uuid/v4";

class Task {
    id: string
    title: string
    description: string
    url: string
    categories: string[]
    postedBy: string
    requesterId: string
    numLikes: number
    numShares: number
    createdAt: Date
    updatedAt: Date
    platform: string
    payout: number
    alottedTime: number
    actualTimes: number[]
    expired: boolean

    private static defaultFields: any = {
        id: uuid4(),
        title: "",
        description: "",
        url: "",
        categories: [ "other" ],
        postedBy: "bennycooly",
        requesterId: "",
        numLikes: 0,
        numShares: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        platform: "mturk",
        alottedTime: 0,
        actualTimes: [],
        expired: false
    }

    constructor(fields?: any) {
        
        // default fields
        if (!fields) {
            this.id = Task.defaultFields.id;
            this.title = Task.defaultFields.title;
            this.description = Task.defaultFields.description;
            this.url = Task.defaultFields.url;
            this.categories = Task.defaultFields.categories;
            this.postedBy = Task.defaultFields.postedBy;
            this.requesterId = Task.defaultFields.requesterId;
            this.numLikes = Task.defaultFields.numLikes;
            this.numShares = Task.defaultFields.numShares;
            this.createdAt = Task.defaultFields.createdAt;
            this.updatedAt = Task.defaultFields.updatedAt;
            this.platform = Task.defaultFields.platform;
            this.payout = Task.defaultFields.payout;
            this.alottedTime = Task.defaultFields.alottedTime;
            this.actualTimes = Task.defaultFields.actualTimes;
            this.expired = Task.defaultFields.expired;
        }

        else {
            this.id = fields.id || Task.defaultFields.id;
            this.title = fields.title || Task.defaultFields.title;
            this.description = fields.description || Task.defaultFields.description;
            this.url = fields.url || Task.defaultFields.url;
            this.categories = fields.categories || Task.defaultFields.categories;
            this.postedBy = fields.postedBy || Task.defaultFields.postedBy;
            this.requesterId = fields.requesterId || Task.defaultFields.requesterId;
            this.numLikes = fields.numLikes || Task.defaultFields.numLikes;
            this.numShares = fields.numShares || Task.defaultFields.numShares;
            this.updatedAt = fields.updatedAt || Task.defaultFields.updatedAt;
            this.createdAt = fields.createdAt || Task.defaultFields.createdAt;
            this.platform = fields.platform || Task.defaultFields.platform;
            this.payout = fields.payout || Task.defaultFields.payout;
            this.alottedTime = fields.alottedTime || Task.defaultFields.alottedTime;
            this.actualTimes = fields.actualTimes || Task.defaultFields.actualTimes;
            this.expired = fields.expired || Task.defaultFields.expired;
        }
        
    }

}

interface TaskResponse {
    title: string
    description: string
    url: string
    categories: string[]
    postedBy: string
    requesterId: string
    numLikes: number
    numShares: number
    createdAt: Date
    updatedAt: Date
    platform: string
    payout: number
    alottedTime: number
    actualTimes: number[]
    expired: boolean
}


export { Task, TaskResponse };
