import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { movieData } from 'src/app/const/movie';
import { Imovie } from 'src/app/model/movie';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {

  editId!: Imovie
  movieArr: Imovie[] = movieData
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onAdd(movie: Imovie) {
    this.movieArr.unshift(movie)
    this.snackBar.open('MOVIE ADDED SUCCESSFULLY', 'close', {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }
  onRemove(id: string) {
    let value = this.movieArr.findIndex(m => m.id === id)
    if (value > -1) {
      this.movieArr.splice(value, 1)
    } this.snackBar.open('MOVIE REMOVED SUCCESSFULLY', 'close', {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }
  onEdit(movie: Imovie) {
    this.editId = { ...movie }
  }
  onUpdate(movie: Imovie) {
    let getIndex = this.movieArr.findIndex(m => m.id === movie.id)
    if (getIndex >= 0) {
      this.movieArr[getIndex] = movie
    } this.snackBar.open('MOVIE UPDATED SUCCESSFULLY', 'close', {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
