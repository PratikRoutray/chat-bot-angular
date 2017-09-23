import { Routes, RouterModule } from '@angular/router';
import{MessageBotComponent} from './message-bot/message-bot.component';

const app_routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/messagebot' },
  { path: 'messagebot', component: MessageBotComponent    },
];

export const app_routing = {
  routes: RouterModule.forRoot(app_routes),
  components: [ 
                MessageBotComponent
              ]
};