export interface Repository {
    id: number;
    name: string;
    fork: boolean;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
    description?: string;
}
