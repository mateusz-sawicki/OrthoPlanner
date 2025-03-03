import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-fab-btn',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './fab-btn.component.html',
  styleUrl: './fab-btn.component.scss'
})
export class FabBtnComponent {
  @Input() isMobile: boolean = false;
}
