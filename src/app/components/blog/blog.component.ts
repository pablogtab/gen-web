import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {


  blogs: Blog[] = []

  constructor() {
    this.blogs.push({
      urlImage: 'assets/blog-sample.png',
      title: 'Top 10 Home Buying Mistakes to Avoid',
      subtitle: 'Etiam eget elementum elit. Aenean dignissim dapibus vestibulum',
      day: '28',
      dayOfWeek: 'Mon'
    })
    this.blogs.push({
      urlImage: 'assets/blog-sample.png',
      title: 'How to Stage Your Home for a Quick Sale',
      subtitle: 'Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.',
      day: '08',
      dayOfWeek: 'Mon'
    })
    this.blogs.push({
      urlImage: 'assets/blog-sample.png',
      title: '5 Tips for First-Time Home Sellers',
      subtitle: 'In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.',
      day: '26',
      dayOfWeek: 'Wed'
    })
    this.blogs.push({
      urlImage: 'assets/blog-sample.png',
      title: '5 Tips for First-Time Home Sellers',
      subtitle: 'In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.',
      day: '26',
      dayOfWeek: 'Wed'
    })
    this.blogs.push({
      urlImage: 'assets/blog-sample.png',
      title: '5 Tips for First-Time Home Sellers',
      subtitle: 'In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.',
      day: '26',
      dayOfWeek: 'Wed'
    })
    this.blogs.push({
      urlImage: 'assets/blog-sample.png',
      title: '5 Tips for First-Time Home Sellers',
      subtitle: 'In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.',
      day: '26',
      dayOfWeek: 'Wed'
    })
    this.blogs.push({
      urlImage: 'assets/blog-sample.png',
      title: '5 Tips for First-Time Home Sellers',
      subtitle: 'In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.',
      day: '26',
      dayOfWeek: 'Wed'
    })


  }



  ngAfterViewInit() {

  }



}


type Blog = {
  urlImage: string
  title: string
  subtitle: string
  day: string
  dayOfWeek: string
}