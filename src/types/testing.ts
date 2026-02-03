export type StatusAttemp = 'graded' | 'in_progress' | 'submitted';

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
    description: string;
    durationSec: number;
    passScore: number;
    attemptsAllowed: number;
    isPublished: boolean;
    tags: string[];
    attempAllow: number;
    allowRetry: number;
    deadline?: string | null;
}