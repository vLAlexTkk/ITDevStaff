import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getEndpoints() {
    return `
      <html>
        <head>
          <title>API Endpoints</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 30px;
            }
            ul {
              list-style: none;
              padding: 0;
            }
            li {
              margin-bottom: 15px;
              border: 1px solid #000;
              padding: 20px;
              border-radius: 10px;
            }
            a {
              text-decoration: none;
              color: #007bff;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <h1>Available API Endpoints</h1>
          <ul>
            <li><strong>POST</strong>: <a href="/admin" target="_blank">/admin</a> - Create a new article</li>
            <li><strong>GET</strong>: <a href="/articles" target="_blank">/articles</a> - Get all articles</li>
            <li><strong>GET</strong>: <a href="/articles/1" target="_blank">/articles/:id</a> - Get an article by ID</li>
            <li><strong>GET</strong>: <a href="/features-and-categories/categories" target="_blank">/features-and-categories/categories</a> - Get all categories</li>
            <li><strong>GET</strong>: <a href="/features-and-categories/features" target="_blank">/features-and-categories/features</a> - Get all features</li>
          </ul>
        </body>
      </html>
    `;
  }
}
