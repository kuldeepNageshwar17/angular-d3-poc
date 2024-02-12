import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-area-chart',
  standalone: true,
  imports: [],
  templateUrl: './area-chart.component.html',
  styleUrl: './area-chart.component.scss'
})
export class AreaChartComponent implements OnInit {
  // private data = [
  //   {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
  //   {"Framework": "React", "Stars": "150793", "Released": "2013"},
  //   {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
  //   {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
  //   {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
  //   ];
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  private apidata = [
    {
      "date": "2013-04-28",
      "value": 135.98
    },
    {
      "date": "2013-04-29",
      "value": 147.49
    },
    {
      "date": "2013-04-30",
      "value": 146.93
    },
    {
      "date": "2013-05-01",
      "value": 139.89
    },
    {
      "date": "2013-05-02",
      "value": 125.6
    },
    {
      "date": "2013-05-03",
      "value": 108.13
    },
    {
      "date": "2013-05-04",
      "value": 115
    },
    {
      "date": "2013-05-05",
      "value": 118.8
    },
    {
      "date": "2013-05-06",
      "value": 124.66
    },
    {
      "date": "2013-05-07",
      "value": 113.44
    },
    {
      "date": "2013-05-08",
      "value": 115.78
    },
    {
      "date": "2013-05-09",
      "value": 113.46
    },
    {
      "date": "2013-05-10",
      "value": 122
    },
    {
      "date": "2013-05-11",
      "value": 118.68
    },
    {
      "date": "2013-05-12",
      "value": 117.45
    },
    {
      "date": "2013-05-13",
      "value": 118.7
    },
    {
      "date": "2013-05-14",
      "value": 119.8
    },
    {
      "date": "2013-05-15",
      "value": 115.81
    },
    {
      "date": "2013-05-16",
      "value": 118.76
    },
    {
      "date": "2013-05-17",
      "value": 125.3
    },
    {
      "date": "2013-05-18",
      "value": 125.25
    },
    {
      "date": "2013-05-19",
      "value": 124.5
    },
    {
      "date": "2013-05-20",
      "value": 123.62
    },
    {
      "date": "2013-05-21",
      "value": 123
    },
    {
      "date": "2013-05-22",
      "value": 124
    },
    {
      "date": "2013-05-23",
      "value": 126.93
    },
    {
      "date": "2013-05-24",
      "value": 133.85
    },
    {
      "date": "2013-05-25",
      "value": 133.22
    },
    {
      "date": "2013-05-26",
      "value": 136
    },
    {
      "date": "2013-05-27",
      "value": 135.47
    },
    {
      "date": "2013-05-28",
      "value": 130.58
    },
    {
      "date": "2013-05-29",
      "value": 132.59
    },
    {
      "date": "2013-05-30",
      "value": 132.25
    },
    {
      "date": "2013-05-31",
      "value": 129.9
    },
    {
      "date": "2013-06-01",
      "value": 129.78
    },
    {
      "date": "2013-06-02",
      "value": 129.4
    },
    {
      "date": "2013-06-03",
      "value": 122.5
    },
    {
      "date": "2013-06-04",
      "value": 123.84
    },
    {
      "date": "2013-06-05",
      "value": 123.47
    },
    {
      "date": "2013-06-06",
      "value": 123.1
    },
    {
      "date": "2013-06-07",
      "value": 119
    },
    {
      "date": "2013-06-08",
      "value": 111.42
    },
    {
      "date": "2013-06-09",
      "value": 108.99
    },
    {
      "date": "2013-06-10",
      "value": 110.1
    },
    {
      "date": "2013-06-11",
      "value": 109.6
    },
    {
      "date": "2013-06-12",
      "value": 111.79
    },
    {
      "date": "2013-06-13",
      "value": 110.3
    },
    {
      "date": "2013-06-14",
      "value": 104.7
    },
    {
      "date": "2013-06-15",
      "value": 103.7
    },
    {
      "date": "2013-06-16",
      "value": 101.6
    },
    {
      "date": "2013-06-17",
      "value": 102.21
    },
    {
      "date": "2013-06-18",
      "value": 111.11
    },
    {
      "date": "2013-06-19",
      "value": 110.22
    },
    {
      "date": "2013-06-20",
      "value": 114.3
    },
    {
      "date": "2013-06-21",
      "value": 114.99
    },
    {
      "date": "2013-06-22",
      "value": 109.96
    },
    {
      "date": "2013-06-23",
      "value": 108.8
    },
    {
      "date": "2013-06-24",
      "value": 108.33
    },
    {
      "date": "2013-06-25",
      "value": 106.47
    },
    {
      "date": "2013-06-26",
      "value": 105.49
    }
  ]
  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  private markerHeight=5;
  private createMarker(markersContainer:any,x:number):void{
    markersContainer.selectAll('.marker').remove();
    markersContainer.selectAll('.marker-button').remove();
  markersContainer.append('rect')
      .attr('class', 'marker greater-than-marker')
      .attr('x', x - 30)
      .attr('y', this.markerHeight) // Adjust the height of the marker
      .attr('width', 30)
      .attr('height', 20)
      .attr('rx', 10)
      .attr('fill', 'black'); // Adjust the color if needed
    markersContainer.append('rect')
      .attr('class', 'marker greater-than-marker')
      .attr('x', x - 20)
      .attr('y', this.markerHeight) // Adjust the height of the marker
      .attr('width', 20)
      .attr('height', 20)

      .attr('fill', 'black');

    // Add "less than" marker on the right
    markersContainer.append('rect')
      .attr('class', 'marker less-than-marker')
      .attr('x', x)
      .attr('y', this.markerHeight)  // Adjust the height of the marker
      .attr('width', 20)
      .attr('height', 20)
      
      .attr('fill', 'black');
    markersContainer.append('rect')
      .attr('class', 'marker greater-than-marker')
      .attr('x', x)
      .attr('y', this.markerHeight) // Adjust the height of the marker
      .attr('width', 30)
      .attr('height', 20)
      .attr('rx', 10)
      .attr('fill', 'black');
    markersContainer.append("text").attr('class', 'marker marker-button')
    .attr('x', x+15) // Initial x position, update during drag
    .attr('y', this.markerHeight+15) // Adjust the height of the button
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('❯');
     markersContainer.append("text").attr('class', 'marker marker-button')
    .attr('x', x-15) // Initial x position, update during drag
    .attr('y', this.markerHeight+15) // Adjust the height of the button
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('❮');

  }
  private createSvg(): void {
    this.svg = d3.select(this.el.nativeElement).select("figure#bar")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(): void {
    let formatter = d3.timeParse("%Y-%m-%d")
    let data = this.apidata.map(d => {

      return formatter(d.date)
    });
    var x = d3.scaleTime()
      .domain(d3.extent(data, d => d) as Date[])
      .range([0, this.width]);

    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x));


    var y = d3.scaleLinear()
      .domain([0, d3.max(this.apidata, function (d) { return +d.value }) as Number])
      .range([this.height, 0]);

    this.svg.append("g")
      .call(d3.axisLeft(y));

    this.svg.append("path")
      .datum(this.apidata)
      .attr("fill", "#cce5df")
      .attr("stroke", "#69b3a2")
      .attr("stroke-width", 1.5)
      .attr("d", d3.area()
        .x(function (d: any) { return x(formatter(d.date) as Date) })
        .y0(y(0))
        .y1(function (d: any) { return y(d.value) })
      )

    var verticalLine = this.svg
      .append('line')
      .attr('class', 'vertical-line')
      .attr('y1', 0)
      .attr('y2', this.height)
      .attr('x1', 200)
      .attr('x2', 200)
      .attr('stroke', 'black')
      .attr('stroke-width', 2)
      .attr("stroke-dasharray", "10,10")
      .attr('pointer-events', 'none');

    var verticalCursor = this.svg
      .append('line')
      .attr('class', 'vertical-cursor')
      .attr('y1', 0)
      .attr('y2', this.height)
      .attr('x1', 200)
      .attr('x2', 200)
      .attr('stroke', 'none')
      .attr('stroke-width', 2)
      .attr('pointer-events', 'none');

  const markersContainer = this.svg.append('g').attr('class', 'markers-container');
  this.createMarker(markersContainer,200);
    var tooltip = this.svg
      .append('text')
      .attr('class', 'tooltip')
      .attr('x', 10)
      .attr('y', this.height+30)
      .attr('dy', '.35em')
      .style('fill', 'red');



    this.renderer.listen(this.svg.node(), 'click', (event) => {


      // Remove existing markers
      markersContainer.selectAll('.marker').remove();
      const mouseX = event.clientX - this.svg.node().getBoundingClientRect().left - this.margin / 2
      let curretnX: any = x.invert(mouseX);
      let xValue: any = curretnX;
      if (event.clientX < 200) {


        xValue = 200;
      } else {
        xValue = x(curretnX);
      }


      verticalLine.attr('x1', xValue).attr('x2', xValue);
      tooltip.text('X: ' + new Date(xValue));
     this.createMarker(markersContainer,xValue);

    });

    const dragHandler = d3.drag()
      .on('drag', (event) => {
        const xValue = x.invert(event.x);
        verticalLine.attr('x1', x(xValue)).attr('x2', x(xValue));
        tooltip.text('X: ' + new Date(xValue));
        verticalCursor.attr('x1', x(xValue)).attr('x2', x(xValue));

      });

    dragHandler(this.svg.select('.vertical-line'));


    this.renderer.listen(this.svg.node(), 'mousemove', (event) => {
      const mouseX = event.clientX - this.svg.node().getBoundingClientRect().left - this.margin / 2
      const xValue = x.invert(mouseX);
      verticalCursor.attr('x1', x(xValue)).attr('x2', x(xValue));
      tooltip.text('X: ' + new Date(xValue));
    });


  }

  ngOnInit(): void {
    this.createSvg();
    this.drawBars();
  }
}
