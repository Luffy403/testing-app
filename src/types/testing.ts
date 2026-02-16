export type StatusAttemp = 'graded' | 'in_progress' | 'submitted';

export type TestMeta = {
    project: string;
    track: string;
    course: string;
    purpose: string;
}

export type Attemp = {
    id: number;
    testId: number;
    userId: number;
    // startedAt: string;
    // finishedAt: string;
    timeSpent: number;
    score: number;
    status: StatusAttemp;
}

export type TestItem = {
    id: number;
    title: string;
    shortDescription: string;
    durationSec: number;
    passScore: number;
    attemptsAllowed: number;
    allowRetry: boolean;
    isPublished: boolean;
    meta: TestMeta
    tags: string[];
    attempAllow: number;
    deadlineISO?: string;
}