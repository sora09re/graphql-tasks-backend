import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SigninResponse } from './dto/signin.response';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { SigninInput } from './dto/signin.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => SigninResponse)
  @UseGuards(GqlAuthGuard)
  async signin(
    @Args('signinInput') signinInput: SigninInput,
    @Context() context: any,
  ) {
    return await this.authService.signin(context.user);
  }
}
