export class Utils {
    public static anyToDate(anyDate: any): Date {
        return new Date(String(anyDate));
    }
}