import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from 'src/app/interfaces/post.interface';
import { PublicacionesService } from 'src/app/services/publicaciones.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  newPost: Post
  formulario: FormGroup;

  publicacionesService = inject(PublicacionesService)

  constructor() {
    this.formulario = new FormGroup({
      titulo: new FormControl,
      texto: new FormControl,
      autor: new FormControl,
      categoria: new FormControl,
      fecha: new FormControl,
    })
    this.newPost = {
      titulo: '', texto: '', autor: '', fecha: '', imagen: '', categoria: ''
    }
  }
  onSubmit() {
    //aqui coje el valor del formulario
    this.newPost = this.formulario.value
    console.log('newPost', this.newPost)
    this.publicacionesService.createPosts(this.newPost)
  }

}


