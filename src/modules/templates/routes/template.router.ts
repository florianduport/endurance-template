import { EnduranceRouter, EnduranceRequest, Response, NextFunction, FileUploadConfig } from 'endurance-core';

class TemplateRouter extends EnduranceRouter {
  protected setupRoutes(): void {
    // Public GET route (no authentication required)
    this.get(
      '/public-endpoint',
      { requireAuth: false },
      async (req: EnduranceRequest, res: Response) => {
        res.json({ message: 'This is a public endpoint.' });
      }
    );

    // Protected GET route (authentication required)
    this.get(
      '/private-endpoint',
      { requireAuth: true },
      async (req: EnduranceRequest, res: Response) => {
        res.json({ message: `Authenticated user: ${req.user?.email || 'unknown'}` });
      }
    );

    // POST route with file upload (single file)
    this.post(
      '/upload',
      { requireAuth: true },
      FileUploadConfig.single('file', {
        allowedMimeTypes: ['image/png', 'application/pdf'],
        maxFileSize: 5 * 1024 * 1024 // 5MB
      }),
      async (req, res: Response) => {
        const file = (req as EnduranceRequest & { file?: any }).file;
        res.json({ file });
      }
    );

    // Basic POST route (with typed body)
    this.post(
      '/submit',
      { requireAuth: true },
      async (req, res: Response) => {
        const body = (req as EnduranceRequest & { body: any }).body;
        res.json({ data: body });
      }
    );
  }
}

export default new TemplateRouter();
