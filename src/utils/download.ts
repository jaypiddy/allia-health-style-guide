
/**
 * Utility functions for handling file downloads
 */

/**
 * Trigger a download of a file from a URL
 * @param url The URL of the file to download
 * @param filename The name to save the file as
 */
export const downloadFile = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


