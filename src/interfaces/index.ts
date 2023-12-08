export type Status = 'آ' | 'ب' | 'س'| 'د'| 'ت' |'کلمه اول'| 'کلمه دوم'|'کلمه سوم'|'کلمه چهارم'|'کلمه پنجم'|'کلمه شیشم'|'ر'|'م'

export interface Data {
    id: number
    content: string
    status: Status
    
}

