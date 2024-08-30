export interface IStatusMessage {
    type: 'success' | 'error' | '';
    message: string;
    isActive: boolean;
}