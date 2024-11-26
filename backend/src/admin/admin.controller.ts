import { Controller, Get, Render } from '@nestjs/common';

@Controller('admin')
export class AdminController {
  @Get()
  @Render('admin')
  showAdminPage() {
    return {};
  }
}
