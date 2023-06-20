import { Component, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {
  AllPosts: Post[]
  //services
  publicacionesServices = inject(PublicacionesService)

  constructor() {
    this.AllPosts = []

  }

  ngOnInit() {
    this.AllPosts = this.publicacionesServices.getAll()
  }
  filtroCategoria($event: any) {
    this.AllPosts = this.publicacionesServices.getByCategoria($event.target.value)

  }





}
