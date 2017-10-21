import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageComponent } from './search-page.component';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;
  let blank:string;
  let nul:string;
  let titletest:string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(function() {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    blank=component.createImgPath("");
    nul=component.createImgPath(null);
  });

  it('blank image path',()=>{
    expect(blank).toBe("http://via.placeholder.com/92x137?text=Not+Found");
  });

  it('null image path',()=>{
    expect(nul).toBe("http://via.placeholder.com/92x137?text=Not+Found");
  });

  beforeEach(function() {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    component.title="prova test";
    titletest=component.createURL();
  });

  it('concat strin with +',()=>{
    expect(titletest).toBe("https://api.themoviedb.org/3/search/movie?api_key=8d19117f52af20f7e348521d72239732&query=prova+test");
  });
});
