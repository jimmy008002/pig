import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, UrlSegment, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  public pageTitle: string;
  public breadcrumbs: { name: string; url: string }[] = [];
  
  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
         this.breadcrumbs = [];
         this.parseRoute(this.router.routerState.snapshot.root);
      }
   });
  }

  parseRoute(node: ActivatedRouteSnapshot) {
    if (node.data['breadcrumb']) {
        if (node.url.length) {
            let urlSegments: UrlSegment[] = [];
            node.pathFromRoot.forEach(routerState => {
                urlSegments = urlSegments.concat(routerState.url);
            });
            const url = urlSegments.map(urlSegment => {
                return urlSegment.path;
            }).join('/');
            this.breadcrumbs.push({
                name: node.data['breadcrumb'],
                url: '/' + url
            })
        }
    }
    if (node.firstChild) {
        this.parseRoute(node.firstChild);
    }
}

  ngOnInit(): void {
  }

}
